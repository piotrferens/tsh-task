import React from "react";
import { connect } from "react-redux";

import { fetchPayments } from "../actions/actions";
import * as S from "./styled";
import { TableHeader } from "./TableHeader";

export class TableContainer extends React.Component {
    componentDidMount() {
        this.props.fetchPayments();
    }
    render() {
        const { table } = this.props;
        return (
            <div>
                {table.isLoading ? (
                    "Loading..."
                ) : (
                    <S.Table>
                        <TableHeader />
                        <S.Suppliers>
                            {table.payments.map(payment => (
                                <S.TableRow key={payment.payment_supplier}>
                                    <S.SupplierName>
                                        <span>{payment.payment_supplier}</span>{" "}
                                    </S.SupplierName>
                                    <S.Rating>
                                        <span>{payment.payment_cost_rating}</span>
                                    </S.Rating>
                                    <S.Reference>
                                        <span>{payment.payment_ref}</span>
                                    </S.Reference>
                                    <S.Value>
                                        <span>{payment.payment_amount}</span>
                                    </S.Value>
                                </S.TableRow>
                            ))}
                        </S.Suppliers>
                    </S.Table>
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { table: state.table };
}

export const Table = connect(mapStateToProps, { fetchPayments })(TableContainer);
