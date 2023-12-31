import React from 'react'
import "./dataCourses.css"
import { backgroundColor } from './Courses';
import { EditIcon, DeleteIcon } from './Icons';
import { exportTableToExcel } from './download/Download';


// Componente Tabla

function DataCourses(props) {
  {
    Object.keys(props.data).map((i) => (
      i % 2 === 0 ? backgroundColor.push('#fff') : backgroundColor.push('#e0e7ee')
    ))
  }

  return (
    <div className='container-table'>
      <div className='dataTable'>

        <h2>{props.title}</h2>
        
        <div className='botones'>

          <div className='btn'>
            {/* <i className="bi bi-person-plus-fill"></i> */}
            <button>Recommendation</button>
          </div>

          <div className='btn'>
            <i className="bi bi-cloud-arrow-down-fill"></i>
            <button  onClick={() =>  exportTableToExcel('download')}>Download</button>
          </div>

          <div className='btn'>
            <i className="bi bi-filter"></i>
            <button>Filter</button>
          </div>

          <div className='search'>
            <input placeholder='Search' />
          </div>

        </div>

        <table id='download'>
          <thead>
            <tr>
              <th></th>
              {Object.keys(props.tableHeader).map((index) => (
                <th scope="col" key={props.tableHeader[index]}>{props.tableHeader[index]}</th>
              ))}
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            {Object.keys(props.data).map((key) => (
              <tr key={key} >
                <td className='actions' style={{ background: backgroundColor[key] }}><input type='checkbox'></input></td>
                {Object.keys(props.tableHeader).map((index) => (

                  <td data-label={props.tableHeader[index]} key={index} style={{ background: backgroundColor[key] }}  >
                    {props.data[key][props.tableHeader[index]]}
                  </td>
                ))}
                <td className="actions" style={{ background: backgroundColor[key] }}><button className='delete'><EditIcon   /></button></td>
                <td className="actions" style={{ background: backgroundColor[key] }}><button className='edit'  ><DeleteIcon /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DataCourses