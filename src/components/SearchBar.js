import React from "react";

import * as S from "./styled";

export class SearchBar extends React.Component {
    render() {
        return (
            <S.SearchBar>
                <S.Input type="text" placeholder="Search suppliers" />
                <S.SelectContainer>
                    <S.Select defaultValue="0">
                        <option value="0" disabled>
                            Select pound rating
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </S.Select>
                </S.SelectContainer>
                <S.Reset> Reset</S.Reset>
                <S.Search> Search </S.Search>
            </S.SearchBar>
        );
    }
}
