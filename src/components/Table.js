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
                        {table.payments.map((payment, i) => (
                            <S.TableRow
                                key={payment.paymentRef + i}
                                onClick={() => this.props.selectSupplier(payment)}
                            >
                                <S.SupplierName>{payment.paymentSupplier}</S.SupplierName>
                                <Rating paymentCostRating={payment.paymentCostRating} />
                                <S.Reference>{payment.paymentRef}</S.Reference>
                                <S.Value>{payment.paymentAmount}</S.Value>
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
