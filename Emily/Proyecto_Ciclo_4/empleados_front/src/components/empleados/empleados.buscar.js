import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { request } from '../helper/helper';
import './empleados.buscar.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider, PaginationListStandalone } from 'react-bootstrap-table2-paginator';

const products = [
    {
        id: 1,
        name: 'Tito',
        lastname: 'El Bambino',
        price: 10000,
    },
    {
        id: 2,
        name: 'Onfe',
        lastname: 'Vallejo',
        price: 10000,
    },
    {
        id: 3,
        name: 'Bit',
        price: 17000,
    },
    {
        id: 4,
        name: 'Tito',
        price: 1000,
    },
    {
        id: 5,
        name: 'Onfe',
        price: 10000,
    },
    {
        id: 6,
        name: 'Bit',
        price: 17000,
    },
    {
        id: 7,
        name: 'Tito',
        price: 1000,
    },
    {
        id: 8,
        name: 'Onfe',
        price: 10000,
    },
    {
        id: 9,
        name: 'Bit',
        price: 17000,
    },
    {
        id: 10,
        name: 'Tito',
        price: 1000,
    },
    {
        id: 11,
        name: 'Onfe',
        price: 10000,
    },
    {
        id: 12,
        name: 'Bit',
        price: 17000,
    }
];
const columns = [{
    dataField: 'id',
    text: 'Product ID'
}, {
    dataField: 'name',
    text: 'Product Name'
}, {
    dataField: 'lastname',
    text: 'Last Name'
}, {
    dataField: 'price',
    text: 'Product Price'
}];


export default class empleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        request.get('/').then((response) => {
            console.log(response.data);
        })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        const options = {
            custom: true,
            totalSize: products.length
        };
        return (
            <Container id='empleados-buscar-container'>
                <Row>
                    <h1>Buscar Empleados</h1>
                </Row>
                <Row>
                    <PaginationProvider
                        pagination={paginationFactory(options)}
                    >
                        {
                            ({
                                paginationProps,
                                paginationTableProps
                            }) => (
                                <div>
                                    <BootstrapTable
                                        keyField="id"
                                        data={products}
                                        columns={columns}
                                        {...paginationTableProps}
                                    />
                                    <PaginationListStandalone
                                        {...paginationProps}
                                    />
                                </div>
                            )
                        }
                    </PaginationProvider>
                </Row>
            </Container>
        );
    }
}

