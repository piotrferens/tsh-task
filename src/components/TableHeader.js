import React from "react";
import * as S from "./styled";

export class TableHeader extends React.Component {
    render() {
        return (
            <S.TableHeader>
                <div style={{ flex: 6 }}>
                    <span>Supplier</span>
                </div>
                <div style={{ flex: 2 }}>
                    <span>Pound Rating</span>
                </div>
                <div style={{ flex: 1 }}>
                    <span>Reference</span>
                </div>
                <div style={{ flex: 1 }}>
                    <span>Value</span>
                </div>
            </S.TableHeader>
        );
    }
}
