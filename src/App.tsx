import { useEffect, useState } from "react";

import { GetCurrentDate, FilterList } from "./helpers"
import { ItemProps } from "./types/ItemProps";
import { items } from "./data/items";
import { FinanceTable } from "./components/FinanceTable";

export default function App() {
    const [list] = useState(items);
    const [filteredList, setFilteredList] = useState<ItemProps[]>([]);
    const [currentDate] = useState(GetCurrentDate);

    useEffect(() => {
        setFilteredList(FilterList(list, currentDate));
    }, [list, currentDate])

    return (
        <div className="card-body m-12">
            <div className="rounded-top bg-blue h-8">
                <div className="d-flex text-center flex-column text-white pt-8">
                    <span className="fw-bold fs-3 npt-4">SISTEMA FINANCEIRO</span>
                </div>
            </div>

            <div className="bg-white rounded mb-9 mt-n1 py-6 px-9">
                <FinanceTable filteredList={filteredList} />
            </div>
        </div>
    )
}
