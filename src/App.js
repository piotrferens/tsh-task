import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "react-svg-spinner";
import Delay from "react-delay";

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
                    <S.SpinnerWrapper>
                        <Delay wait={200}>
                            <Spinner size="64px" speed="fast" />
                        </Delay>
                    </S.SpinnerWrapper>
                ) : (
                    <React.Fragment>
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
