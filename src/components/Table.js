import React from "react";
import { connect } from "react-redux";

import * as S from "./styled";
import { TableHeader } from "./TableHeader";

export class TableContainer extends React.Component {
    render() {
        const { table } = this.props;
        return (
            <S.TableContainer>
                <S.Table>
                    <TableHeader />
                    <S.Suppliers>
                        {table.payments.map(payment => (
                            <S.TableRow key={payment.paymentRef}>
                                <S.SupplierName>
                                    <span>{payment.paymentSupplier}</span>{" "}
                                </S.SupplierName>
                                <S.Rating>
                                    <span>{payment.paymentCostRating}</span>
                                </S.Rating>
                                <S.Reference>
                                    <span>{payment.paymentRef}</span>
                                </S.Reference>
                                <S.Value>
                                    <span>{payment.paymentAmount}</span>
                                </S.Value>
                            </S.TableRow>
                        ))}
                    </S.Suppliers>
                </S.Table>
            </S.TableContainer>
        );
    }
}

function mapStateToProps(state) {
    return { table: state.table };
}

export const Table = connect(mapStateToProps)(TableContainer);
