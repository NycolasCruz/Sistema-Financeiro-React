import Table from 'react-bootstrap/Table';
import dayjs from 'dayjs';

import { ItemProps } from "../../types/ItemProps";
import { categories } from '../../data/categories';
import { Categories } from '../../enums/Categories';

type Props = {
    filteredList: ItemProps[];
}

type CategoryEnum = {
    1: number;
}

export function FinanceTable({ filteredList }: Props) {
    return (
        <Table>
            <thead>
                <tr>
                    <th className="col-1">#</th>
                    <th className="col-3">Nome</th>
                    <th className="col-3">Categoria</th>
                    <th className="col-3">Data</th>
                    <th className="col-2">Custo Total</th>
                </tr>
            </thead>
            <tbody>
                {filteredList.map((item, index) => {
                    const formateddValue = item.value.toLocaleString('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    });
                    const date = dayjs(item.date).format("DD/MM/YYYY")
                    const category = categories[Categories[item.category as keyof CategoryEnum]]

                     return (
                        <tr key={`item-${index}`}>
                            <td className="col-1">{index + 1}</td>
                            <td className="col-3">{item.name.toUpperCase()}</td>
                            <td className="col-3">{category.name.toUpperCase()}</td>
                            <td className="col-3">{date}</td>
                            <td className="col-2">{formateddValue}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}