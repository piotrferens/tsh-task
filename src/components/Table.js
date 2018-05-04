import React from "react";
import { connect } from "react-redux";

import * as S from "./styled";
import { TableHeader } from "./TableHeader";
import { Rating } from "./Rating";
import { ModalSupplier } from "./Modal";
import { selectSupplier, closeModal } from "../actions/actions";

export class TableContainer extends React.Component {
    render() {
        const { table } = this.props;

        return (
            <S.TableContainer>
                <S.Table>
                    <TableHeader />
                    <S.Suppliers>
                        {table.suppliers.map((supplier, i) => (
                            <S.TableRow
                                key={supplier.paymentRef + i}
                                onClick={() => this.props.selectSupplier(supplier)}
                            >
                                <S.SupplierName>{supplier.paymentSupplier}</S.SupplierName>
                                <Rating paymentCostRating={supplier.paymentCostRating} />
                                <S.Reference>{supplier.paymentRef}</S.Reference>
                                <S.Value>{supplier.paymentAmount}</S.Value>
                            </S.TableRow>
                        ))}
                    </S.Suppliers>
                </S.Table>
                {table.selectedSupplier && (
                    <ModalSupplier
                        supplier={table.selectedSupplier}
                        closeModal={this.props.closeModal}
                    />
                )}
            </S.TableContainer>
        );
    }
}

function mapStateToProps(state) {
    return { table: state.table };
}

export const Table = connect(mapStateToProps, { selectSupplier, closeModal })(TableContainer);
