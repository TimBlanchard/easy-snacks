import React from 'react'
import './index.scss'
import {useTable, useSortBy} from 'react-table'
import {Link} from "wouter";

export default function ArrayData({listData, listColumns}) {

    const data = React.useMemo(
        () => listData,
        []
    )

    const columns = React.useMemo(
        () => listColumns,
        []
    )

    const tableInstance = useTable({columns, data}, useSortBy)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        <div className="arrayData box-default">
            <table {...getTableProps()}>
                <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {
                                            column.render('Header')}
                                        <span>{column.isSorted ? (column.isSortedDesc ? ' (A-Z)' : ' (Z-A)') : ''}</span>
                                    </th>
                                ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        console.log(row)
                        return (
                            <>
                                {listData[row.id].router ?
                                    <Link href={"/schools/"+listData[row.id].router}>
                                        <tr {...row.getRowProps()} className="clickable">
                                            {
                                                row.cells.map(cell => {
                                                    return (
                                                        <td {...cell.getCellProps()}>
                                                            {cell.render('Cell')}
                                                        </td>
                                                    )
                                                })}
                                        </tr>
                                    </Link>
                                    : <tr {...row.getRowProps()}>
                                        {
                                            row.cells.map(cell => {
                                                return (
                                                    <td {...cell.getCellProps()}>
                                                        {cell.render('Cell')}
                                                    </td>
                                                )
                                            })}
                                    </tr>
                                }
                            </>



                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
