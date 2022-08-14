import "./table.scss";
import { Icon, Label, Menu, Table } from 'semantic-ui-react'


const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Fork Lift",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "5.01 g/km",
      date: "0.06",
      amount: 1.26,
      method: "6.8",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Fork Lift",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "5.01 g/km",
      date: "0.06",
      amount: 1.26,
      method: "6.8",
      status: "Alert",
    },
    {
      id: 2342353,
      product: "Fork Lift",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "5.01 g/km",
      date: "0.06",
      amount: 1.26,
      method: "6.8",
      status: "Alert",
    },
    {
      id: 2357741,
      product: "Fork Lift",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "5.01 g/km",
      date: "0.06",
      amount: 1.26,
      method: "6.8",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "Fork Lift",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      customer: "5.01 g/km",
      date: "0.06",
      amount: 1.26,
      method: "6.8",
      status: "Alert",
    },
  ];
  return (
    
      <Table >
        <Table.Header>
          <Table.Row>
            <Table.Cell className="Table.Cell">ID</Table.Cell>
            <Table.Cell className="Table.Cell">Element</Table.Cell>
            <Table.Cell className="Table.Cell">CO2</Table.Cell>
            <Table.Cell className="Table.Cell">CH4</Table.Cell>
            <Table.Cell className="Table.Cell">NOx</Table.Cell>
            <Table.Cell className="Table.Cell">N2O</Table.Cell>
            <Table.Cell className="Table.Cell">Threshold</Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {rows.map((row) => (
            <Table.Row key={row.id}>
              <Table.Cell className="Table.Cell">{row.id}</Table.Cell>
              <Table.Cell className="Table.Cell">
                <div className="cellWrapper">
                  {row.product}
                </div>
              </Table.Cell>
              <Table.Cell className="Table.Cell">{row.customer}</Table.Cell>
              <Table.Cell className="Table.Cell">{row.date}</Table.Cell>
              <Table.Cell className="Table.Cell">{row.amount}</Table.Cell>
              <Table.Cell className="Table.Cell">{row.method}</Table.Cell>
              <Table.Cell className="Table.Cell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
  );
};

export default List;
