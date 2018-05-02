import React from "react";
import * as S from "./styled";

export class TableHeader extends React.Component {
    render() {
        return (
            <S.TableHeader>
                <S.HeaderSupplier>Supplier</S.HeaderSupplier>
                <S.HeaderRating>Pound Rating</S.HeaderRating>
                <S.HeaderRefVal>Reference</S.HeaderRefVal>
                <S.HeaderRefVal>Value</S.HeaderRefVal>
            </S.TableHeader>
        );
    }
}
