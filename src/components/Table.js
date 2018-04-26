import React from "react";
import { connect } from "react-redux";

import { fetchPayments } from "../actions/actions";

export class TableContainer extends React.Component {
    componentDidMount() {
        this.props.fetchPayments();
    }
    render() {
        return (
            <div>
                {this.props.payments.map(payment => (
                    <p key={payment.payment_supplier}>{payment.payment_supplier}</p>
                ))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { payments: state.payments };
}

export const Table = connect(mapStateToProps, { fetchPayments })(TableContainer);
