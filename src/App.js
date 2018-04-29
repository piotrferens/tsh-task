import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPayments } from "./actions/actions";

import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { Table } from "./components/Table";
import { Pagination } from "./components/Pagination";
import * as S from "./components/styled";

class App extends Component {
    componentDidMount() {
        this.props.fetchPayments();
    }
    render() {
        return (
            <S.App>
                <Header />
                {this.props.isLoading ? (
                    "SPinner"
                ) : (
                    <React.Fragment>
                        {" "}
                        <SearchBar />
                        <Table />
                        <Pagination />
                    </React.Fragment>
                )}
            </S.App>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.table.isLoading,
    };
}

export default connect(mapStateToProps, { fetchPayments })(App);
