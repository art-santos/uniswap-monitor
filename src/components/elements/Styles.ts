const tableStyles = (theme) => ({
    root: {
      display: 'flex',
      marginTop: '50px',
      overflowX: 'hide',
      width: '80%',
      margin: 'auto',
      border: '1px solid #e0e0e0',
      borderBottom: '0px',
      rounded: 'small',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    },
    table: {
      minWidth: 340,
    },
    tableHead: {
      backgroundColor: '#f5f5f5',
    },
    tableCell: {
      paddingRight: 4,
      paddingLeft: 5,
    },
  });

export default tableStyles;