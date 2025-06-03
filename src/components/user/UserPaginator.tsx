import { Paginator } from 'primereact/paginator'

interface UserPaginationProps {
  page: number
  rows: number
  totalRecords: number
  setPage: (page: number) => void
  setRows: (rows: number) => void
}

const UserPaginator = ({
  page,
  rows,
  totalRecords,
  setPage,
  setRows,
}: UserPaginationProps) => {
  return (
    <Paginator
      first={(page - 1) * rows}
      rows={rows}
      totalRecords={totalRecords}
      rowsPerPageOptions={[5, 10, 20]}
      onPageChange={(e) => {
        setPage(Math.floor(e.first / e.rows) + 1)
        setRows(e.rows)
      }}
      template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      className="my-4"
    />
  )
}

export default UserPaginator
