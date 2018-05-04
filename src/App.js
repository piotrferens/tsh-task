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
        return (
            <S.App>
                <Header />
                <SearchBar />
                {this.props.isLoading ? (
                    <S.SpinnerWrapper>
                        <Spinner size="64px" speed="fast" />
                    </S.SpinnerWrapper>
                ) : !this.props.error ? (
                    <React.Fragment>
                        <Table />
                        <Pagination />
                    </React.Fragment>
                ) : (
                    <S.Error>No results found</S.Error>
                )}
            </S.App>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.table.isLoading,
        error: state.table.error,
    };
}

export default connect(mapStateToProps, { fetchSuppliers })(App);
