import React from "react";
import * as S from "./styled";

export class TableHeader extends React.Component {
    render() {
        return (
            <S.TableHeader>
                <S.HeaderSupplier>
                    <span>Supplier</span>
                </S.HeaderSupplier>
                <S.HeaderRating>
                    <span>Pound Rating</span>
                </S.HeaderRating>
                <S.HeaderRefVal>
                    <span>Reference</span>
                </S.HeaderRefVal>
                <S.HeaderRefVal>
                    <span>Value</span>
                </S.HeaderRefVal>
            </S.TableHeader>
        );
    }
}
