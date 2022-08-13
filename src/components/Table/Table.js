import React from 'react'
import './table.scss'

export const Table = ({ list }) => {
 
  return (
    <div className="table mb-5">
      <div className="row">
        <div className="col-12">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr className="col-12">
                <th scope="col-12">{list.title}</th>
              </tr>
            </thead>
            <tbody>
              {list.works.map((work, index) => {
                return (
                  <tr key={index}>
                    <th  className="col-12" style={{ width: '100%' }} scope="row">
                      {work}
                    </th>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
