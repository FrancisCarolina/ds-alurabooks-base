import React from "react";
import styled from "styled-components";

const SectionEstilizada = styled.section<{ selecionada: boolean }>`
    width: 194px;
    height: 88px;
    background:  ${props => props.selecionada ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' : '#FFF'};
    border: 1px solid;
    border-color: ${props => props.selecionada ? '#002F52' : '#EB9B00'};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin: 10px;
    font-family: sans-serif;
    cursor: pointer;
    header {
        color: ${props => props.selecionada ? '#FFF' : '#EB9B00'};
        font-size: 12px;
        font-weight: 400;
    }
    strong{
        color: ${props => props.selecionada ? '#FFF' : '#EB9B00'};
        font-size: 16px;
        font-weight: 700;
    }
    footer{
        color: ${props => props.selecionada ? '#FFF' : 'rgba(0,0,0, 0.54)'};
        font-size: 12px;
        font-weight: 400;
    }
`;

export interface AbGrupoOpcao {
    id: number;
    titulo: string;
    corpo: string;
    rodape: string;
}

export interface AbGrupoOpcoesProps {
    opcoes: AbGrupoOpcao[];
}

export const AbGrupoOpcoes = ({opcoes}: AbGrupoOpcoesProps) => {
    return (<>
            {opcoes.map(opcao => 
                <SectionEstilizada key={opcao.id} selecionada={false}>
                    <header>
                        {opcao.titulo}
                    </header>
                    <div>
                        <strong> {opcao.corpo} </strong>
                    </div>
                    <footer>
                        {opcao.rodape}
                    </footer>
                </SectionEstilizada>
            )}
        </>
    )
}