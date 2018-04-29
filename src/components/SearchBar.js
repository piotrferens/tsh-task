import React from "react";
import { connect } from "react-redux";

import { setSearch, searchSuppliers, changeRating, reset } from "../actions/actions";
import * as S from "./styled";
import { buildQuery } from "../selectors/buildQuery";

export class SearchBarContainer extends React.Component {
    onReset = () => {
        this.props.searchSuppliers({});
        this.props.reset();
    };

    onKeyPress = event => {
        if (event.charCode === 13) {
            this.props.searchSuppliers(this.props.query);
        }
    };

    onChange = event => {
        this.props.setSearch(event.target.value);
    };

    onClick = () => {
        this.props.searchSuppliers(this.props.query);
    };

    render() {
        return (
            <S.SearchBar>
                <S.Input
                    type="text"
                    placeholder="Search suppliers"
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                    value={this.props.search}
                />
                <S.SelectContainer>
                    <S.Select
                        value={this.props.rating}
                        onChange={e => this.props.changeRating(e.target.value)}
                    >
                        <option value="0" disabled>
                            Select pound rating
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </S.Select>
                </S.SelectContainer>
                <S.Reset onClick={this.onReset}> Reset</S.Reset>
                <S.Search onClick={this.onClick}> Search </S.Search>
            </S.SearchBar>
        );
    }
}

function mapStateToProps(state) {
    return {
        search: state.search,
        rating: state.rating,
        query: buildQuery(state),
    };
}

export const SearchBar = connect(mapStateToProps, {
    setSearch,
    searchSuppliers,
    changeRating,
    reset,
})(SearchBarContainer);
