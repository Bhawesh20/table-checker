import React from "react";
import "./table.css";
import Pagination from "../Pagination";

const currencyMap = {
  usd: "$",
  eur: "€",
  gbp: "£",
  aud: "A$",
  cad: "C$",
  chf: "CHF",
  dkk: "DKK",
};
const Table = ({ data=[], rowsPerPage=5 }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [projectsPerPage, setProjectsPerPage] = React.useState(rowsPerPage);
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Percentage Funded</th>
            <th>Amount Pledged</th>
          </tr>
        </thead>
        <tbody>
          {data.slice((currentPage-1)*projectsPerPage, currentPage*projectsPerPage).map((project, index) => {
            const currency = project.currency;
            return (
              <tr key={index}>
                <td>{project["s.no"]}</td>
                <td>{project["percentage.funded"]}</td>
                <td>
                  {currency && project["amt.pledged"]
                    ? currencyMap[currency.toLowerCase()]
                      ? `${currencyMap[currency.toLowerCase()]} 
                       ${project["amt.pledged"].toLocaleString()}`
                      : `${currency.toUpperCase()} 
                       ${project["amt.pledged"].toLocaleString()}`
                    : "N/A"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} projectsPerPage={projectsPerPage} setProjectsPerPage={setProjectsPerPage} totalProjects={data.length}/>
    </div>
  );
};

export default Table;
