function EditIcon({ svgProp, stroke }: any) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' {...svgProp}>
      <path
        stroke={stroke}
        d='M75.69 10a2 2 0 00-1.315.494l-6.17 5.402-2.39-1.195a2 2 0 00-2.31.373L50.938 27.643a2 2 0 00-.585 1.414v1.865L12.336 68.938a2 2 0 00-.557 1.078c-1.341 7.886-1.831 14.744-1.824 20.986a2 2 0 002.178 1.99c6.158-.548 13.4-3.562 18.49-5.51a2 2 0 00.7-.455L69.34 49.012h1.863a2 2 0 001.416-.586l11.67-11.672a2 2 0 00.25-2.524l-.887-1.328 6.92-6.92a2 2 0 00.418-2.216c-3.072-7.01-7.759-11.54-14.709-13.678A2 2 0 0075.69 10zm.392 4.318c4.948 1.762 8.128 4.771 10.62 9.88l-6.589 6.585c-1.313-1.754-3.209-3.779-4.957-5.562-2.219-2.265-4.168-4.078-4.168-4.078a1 1 0 00-.728-.278 1 1 0 00-.635 1.742s1.919 1.785 4.102 4.012c2.031 2.073 4.29 4.569 5.36 6.186a2 2 0 00.329.95l.885 1.33-9.926 9.927h-1.863a2 2 0 00-1.414.586l-38.293 38.29c-2.521.967-5.447 2.076-8.367 3.018-1.628-2.674-4.82-4.418-6.055-5.023.248-3.317.634-6.806 1.262-10.598l38.08-38.08c.305.522.66 1.091 1.09 1.711.382.553 1.088 1.276 1.583 1.897l-10.21 9.359a1 1 0 00-.032.03L30.014 62.345l-10.758 9.86a1 1 0 101.351 1.474l10.774-9.875a1 1 0 00.031-.03l16.145-16.144 10.125-9.281a44.657 44.657 0 005.03 4.84l-8.292 6.63a1 1 0 00-.082.075L38.19 66.04 24.738 78.598a1 1 0 101.364 1.463l13.466-12.569a1 1 0 00.026-.023l16.119-16.121 8.627-6.9c.304.228.573.452.896.683a1 1 0 001.164-1.627c-5.103-3.653-8.161-7.157-9.941-9.727-1.277-1.844-1.867-3.135-2.107-3.734v-.158l1.898-1.899 1.953 2.573a1 1 0 101.594-1.21l-2.12-2.79 1.735-1.735 4.59 3.936a1 1 0 101.303-1.52l-4.475-3.834 2.233-2.232 2.177 2.867a1 1 0 101.592-1.209l-2.344-3.084.826-.826 2.303 1.152a2 2 0 002.211-.283l6.254-5.473zm-.389 3.069a.898.898 0 100 1.796.898.898 0 000-1.796zm4.854 1.715a.898.898 0 100 1.794.898.898 0 100-1.794zm-2.873 3.544a.898.898 0 10-.002 1.795.898.898 0 00.002-1.795z'
      />
    </svg>
  );
}

export default EditIcon;
