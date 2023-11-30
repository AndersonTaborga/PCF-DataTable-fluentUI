import * as React from 'react';
import { FluentProvider, Badge } from '@fluentui/react-components';

export interface DadosClienteAppProps {
    agencia: string;
    conta: string;
    cpfCnpj: string;
    chpras: string; // Assuming "Chpras" represents some sort of shopping data
    opcaoUra: string;
    servicoAtual: string;
    funcional: string;
    status: string,
}

export const DadosClienteApp: React.FC<DadosClienteAppProps> = ({
    agencia,
    conta,
    cpfCnpj,
    chpras,
    opcaoUra,
    servicoAtual,
    funcional,
    status
}) => {
    return (
        <FluentProvider>
            <div className="dadosClienteApp">
                <div className="dadosClienteApp__header">
                    <div className="dadosClienteApp__header__title">
                        <h2>Informações do Cliente</h2>
                    </div>
                    <div className="dadosClienteApp__header__badge">
                        <Badge color="brand">Cliente</Badge>
                    </div>
                </div>

                <div className="dadosClienteApp__content">
                    <div className="dadosClienteApp__content__item">
                        <h3>Agência</h3>
                        <p>{agencia}</p>
                    </div>
                    <div className="dadosClienteApp__content__item">
                        <h3>Conta</h3>
                        <p>{conta}</p>
                    </div>
                    <div className="dadosClienteApp__content__item">
                        <h3>CPF/CNPJ</h3>
                        <p>{cpfCnpj}</p>
                    </div>
                    <div className="dadosClienteApp__content__item">
                        <h3>Compras</h3>
                        <p>{chpras}</p>
                    </div>
                    <div className="dadosClienteApp__content__item">
                        <h3>Opção URA</h3>
                        <p>{opcaoUra}</p>
                    </div>
                    <div className="dadosClienteApp__content__item">
                        <h3>Serviço Atual</h3>
                        <p>{servicoAtual}</p>
                    </div>
                    <div className="dadosClienteApp__content__item">
                        <h3>Funcional</h3>
                        <p>{funcional}</p>
                    </div>
                    <div className="dadosClienteApp__content__item">
                        <h3>Status</h3>
                        <p>{status}</p>
                    </div>
                </div>
            </div>
        </FluentProvider>
    );    
}
