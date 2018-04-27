import React, { Component } from "react";

import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { Table } from "./components/Table";
import { Pagination } from "./components/Pagination";
import * as S from "./components/styled";

class App extends Component {
    render() {
        return (
            <S.App>
                <Header />
                <SearchBar />
                <Table />
                <Pagination />
            </S.App>
        );
    }
}

export default App;
