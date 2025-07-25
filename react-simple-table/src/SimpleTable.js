import { useEffect, useState } from 'react';
import './SimpleTable.css';

function SimpleTable({data, TableColumns = null,PageLength=[10,25,50,100]}) {

    const [tableHeaders] = useState(TableColumns ? TableColumns : Object.keys(data[0]));
    const [tableData, changeTableData] = useState(data);
    
    useEffect(()=>{
        changeTableData(data);
    },[data])

  return (
    <div className="Simple-Table">
        <table>
            <thead>
                <tr key={-1}>
                    {
                        tableHeaders.map((header,pos) => {
                           return (<th key={-pos}>{header}</th>)
                        })
                    }
                </tr>
            </thead>
            <tbody>
                    {tableData && tableData.map((row,pos)=>{
                        return (
                            <tr key={pos}>
                                {
                                    Object.keys(row).map((cell,cpos) => {
                                        return(<td key={(tableHeaders.length*pos)+cpos}>{row[cell]}</td>)
                                    })
                                }
                            </tr>
                        )
                    }) }
            </tbody>
        </table>
        <button>Previous Page</button>
        <button>Next Page</button>
        {PageLength.map((data,count)=>{
            return(
                <button>{data}</button>
            )
        }
        )}
        <button>Show All</button>
    </div>
  );
}

export default SimpleTable;
