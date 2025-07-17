import { useEffect, useState } from 'react';
import './SimpleTable.css';


function SimpleTable({data, TableColumns = null}) {

    const [TableHeaders] = useState(TableColumns ? TableColumns : Object.keys(data[0]));

    useEffect(()=>{
        console.log("hi");
        console.log(data);
        console.log(data[0]);
    },[data])

  return (
    <div className="Simple-Table">
        <table>
            <thead>
                <tr key={-1}>
                    {
                        TableHeaders.map((header,pos) => {
                           return (<th key={pos}>{header}</th>)
                        })
                    }
                </tr>
            </thead>
            <tbody>
                    {/*data && data.map((row,pos)=>{
                        return (
                            <tr key={pos}>
                                {
                                    row.map((cell,cpos)=>{
                                        return(
                                            <td key={(row.length*pos)+cpos}>{cell}</td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    }) */}
            </tbody>
        </table>
    </div>
  );
}

export default SimpleTable;
