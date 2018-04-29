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
                    <button disabled={!pagination.left} onClick={() => this.goTo(-1)}>
                        LEFT
                    </button>
                    {pagination.links.map(link => (
                        <button
                            style={{
                                background:
                                    pagination.current === link.page ? "coral" : "buttonface",
                            }}
                            key={link.page}
                            onClick={() => this.props.searchSuppliers(link.query)}
                        >
                            {link.page + 1}
                        </button>
                    ))}
                    <button disabled={!pagination.right} onClick={() => this.goTo(1)}>
                        RIGHT
                    </button>
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
