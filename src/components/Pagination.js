import React from "react";
import { connect } from "react-redux";

import * as S from "./styled";
import { searchSuppliers } from "../actions/actions";

export class PaginationContainer extends React.Component {
    goTo = direction => {
        const { pagination } = this.props;
        const { query } = pagination.links.find(
            link => link.page === pagination.current + direction,
        );
        this.props.searchSuppliers(query);
    };

    render() {
        const { pagination } = this.props;
        return (
            <S.PaginationContainer>
                <S.Pagination>
                    <S.PaginationButton onClick={() => (pagination.left ? this.goTo(-1) : null)}>
                        {"<"}
                    </S.PaginationButton>
                    {pagination.links.map(link => (
                        <S.PaginationButton
                            isActive={pagination.current === link.page}
                            key={link.page}
                            onClick={() => this.props.searchSuppliers(link.query)}
                        >
                            <span> {link.page + 1} </span>
                        </S.PaginationButton>
                    ))}
                    <S.PaginationButton onClick={() => (pagination.right ? this.goTo(1) : null)}>
                        {">"}
                    </S.PaginationButton>
                </S.Pagination>
            </S.PaginationContainer>
        );
    }
}

function mapStateToProps(state) {
    return {
        pagination: state.pagination,
    };
}

export const Pagination = connect(mapStateToProps, { searchSuppliers })(PaginationContainer);
