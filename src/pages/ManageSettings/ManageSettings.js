import React, { useEffect } from "react";
import "./ManageSettings.css";
import Chip from "../../components/shared/Chip/Chip";
import Table from "../../components/Board/Table";
import PopupCard from "../../components/shared/PopupCard/PopupCard";
import { getStore } from "../../http";
import { storesActions } from "../../store/storeSlice";
import { useDispatch, useSelector } from "react-redux";
import { checkDataFitchTime } from "../../util/checkDataFatchTime";

const activeStore = "acf2d038-7742-461d-9ce9-d5322f96be74";
function ManageSettings() {
  const dispatch = useDispatch();

  const stores = useSelector((state) => state.storesSlice);
  const fetchStores = async () => {
    const data = await getStore("VgwLq1sKrUdkxsSuTKEhEF5b8KG3");
    dispatch(storesActions.setStores(data.data.response));
  };

  useEffect(() => {
    if (!stores.stores) {
      fetchStores();
    } else if (checkDataFitchTime(stores.updatedAt)) {
      // fetchStores();
    }
  }, [stores]);

  return (
    <div className="manageSettings">
      <div className="manageSettings__header">
        <p>Manage Staff</p>
        <PopupCard />
      </div>
      <div className="manageSettings__chipContainer thin_scrollbar">
        {stores?.stores?.map((el) => (
          <Chip activate={el.storeId === activeStore} label={el.name} />
        ))}
      </div>
      <div className="manageSettings__table">
        <Table />
      </div>
    </div>
  );
}

export default ManageSettings;
