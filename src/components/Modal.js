import React from "react";
import Modal from "react-responsive-modal";

import * as S from "./styled";
import { SupplierLogo } from "./SupplierLogo";

export class ModalSupplier extends React.Component {
    render() {
        const { supplier } = this.props;
        return (
            <Modal open={!!supplier} onClose={this.props.closeModal} center styles={S.modalStyle}>
                <SupplierLogo />
                <S.ModalInforamtion>
                    <span>Information about the supplier</span>
                </S.ModalInforamtion>
                <S.ModalText>
                    <span>Supplier name: {supplier.paymentSupplier} </span>
                </S.ModalText>
                <S.ModalText>
                    <span>Pound Rating: {supplier.paymentRef}</span>
                </S.ModalText>
                <S.ModalText>
                    <span>Reference: {supplier.paymentCostRating} </span>
                </S.ModalText>
                <S.ModalText>
                    <span>Value: {supplier.paymentAmount}</span>
                </S.ModalText>
            </Modal>
        );
    }
}
