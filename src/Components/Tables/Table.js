import moment from 'moment';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

var user_id = 0;




const Table = ({ data, column, setShowModal1, setID }) => {
  const doTeste = async (user_id) => {
    setID(user_id);
    setShowModal1(true);
  };
  
  return (
    <table className="blueTable">
      <thead className="text-center">
        <tr>
          {column.map((item, index) => <TableHeadItem item={item} />)}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => <TableRow item={item} column={column} doTeste={doTeste}/>)}
      </tbody>
    </table>
  )
}

const TableHeadItem = ({ item }) => <th>{item.heading}</th>
const TableRow = ({ item, column, doTeste }) => (
  <tr>

    {column.map((columnItem, index) => {


      if(columnItem.value.includes('.')) {
        const itemSplit = columnItem.value.split('.') //['address', 'city']
        return 
        <td className="text-center" onClick={() => doTeste(item[index].id)}>{item[itemSplit[0]][itemSplit[1]]}</td>
        
      }
      if (columnItem.value === "data" || columnItem.value === "data_inicio" | columnItem.value === "data_fim"){
        var date_time = item[`${columnItem.value}`];
        var current = moment(date_time)
            .utcOffset('-03:00')
            .format('DD/MM/YYYY');
        return <td onClick={() => doTeste(item[index].id)} className="text-center">{current}</td>
      } else if (columnItem.value === "valor_total" || columnItem.value === "valor" || columnItem.value === "saldo") {
        var valor = item[`${columnItem.value}`].replace(".", ",");
        return <td className="text-center">{valor}</td>
      } else if (columnItem.heading === "Op") {
        var val = item[`${columnItem.value}`];
        return <Button  variant="contained" endIcon={<SendIcon />} onClick={() => doTeste(val)} size="small"></Button> 
        
      } else {
        return <td className="text-center">{item[`${columnItem.value}`]}</td>
      }  
    })}
  </tr>
)

export default Table