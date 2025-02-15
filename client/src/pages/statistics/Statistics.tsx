import { useEffect, useState } from 'react';
import style from './style.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ListTurn } from '../../models/Turn';
import ListTurns from './components/listTurns/ListTurns';
import CircleChart from './components/circleChart/CircleChart';
import ChartLine from './components/chartLine/ChartLine';
import { setError } from '../../store/slices/turn';
import ViewCustomer from './components/viewCustomer/ViewCustomer';
import { socket } from '../../config';

export default function Statistics() {
  const dispatch = useAppDispatch();
  const { uid, token } = useAppSelector((store) => store.user);
  const [list, setList] = useState<ListTurn[]>([]);
  const [turn, setTurn] = useState<ListTurn>();
  const orderList = list.sort((a, b) => new Date(a.enddate).getTime() - new Date(b.enddate).getTime());
  const selectTurn = (data: ListTurn) => {
    setTurn(data);
  };
  useEffect(() => {
    socket.auth = {
      token,
      uid,
    };
    socket.connect();
    socket.emit('getTurns', uid);
    socket.on('turnsList', (data) => {
      setList(data);
    });
    socket.on('error', () => {
      dispatch(setError());
    });
    return () => {
      socket.off('error');
      socket.off('turnsList');
      socket.off('getTurns');
      socket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (turn) setTurn(list.find((e) => e.id === turn.id));
  }, [list]);
  return (
    <section className={style.container}>
      <div className={style.container_table}>
        <div className={`${style.scroll_table} ${style.shadow_effect}`}>
          <ListTurns arrayList={orderList} select={selectTurn} />
        </div>
      </div>
      <div className={style.container_statics}>
        <div className={`${style.finish_turn} ${style.shadow_effect}`}>
          <ViewCustomer turn={turn} user={uid} />
        </div>
        <div className={`${style.pie_chart} ${style.shadow_effect}`}>
          <CircleChart data={list} />
        </div>
        <div className={`${style.line_chart} ${style.shadow_effect}`}>
          <ChartLine data={list} />
        </div>
      </div>
    </section>
  );
}
