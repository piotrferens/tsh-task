import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "react-svg-spinner";

import { fetchSuppliers } from "./actions/actions";

import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { Table } from "./components/Table";
import { Pagination } from "./components/Pagination";
import * as S from "./components/styled";

class App extends Component {
    componentDidMount() {
        this.props.fetchSuppliers();
    }

    render() {
        const { isLoading, error, showTable } = this.props;
        return (
            <S.App>
                <Header />
                <SearchBar />
                {isLoading ? (
                    <S.SpinnerWrapper>
                        <Spinner size="64px" speed="fast" />
                    </S.SpinnerWrapper>
                ) : (
                    showTable && (
                        <React.Fragment>
                            <Table />
                            <Pagination />
                        </React.Fragment>
                    )
                )}
                {error && <S.Error>No results found</S.Error>}
            </S.App>
        );
    }
}

function mapStateToProps({ table }) {
    return {
        isLoading: table.isLoading,
        error: table.error,
        showTable: !table.error && table.suppliers.length > 0,
    };
}

export default connect(mapStateToProps, { fetchSuppliers })(App);
