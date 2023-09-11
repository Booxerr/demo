import React, { useEffect, useState } from "react";
import "./ManageSettings.css";
import Chip from "../../components/shared/Chip/Chip";
import Table from "../../components/Board/Table";
import PopupCard from "../../components/shared/PopupCard/PopupCard";
import { getStaff, getStore } from "../../http";
import { storesActions } from "../../store/storeSlice";
import { staffActions } from "../../store/staffSlice";
import { useDispatch, useSelector } from "react-redux";
import { checkDataFitchTime } from "../../util/checkDataFatchTime";

const BusinessId = "VgwLq1sKrUdkxsSuTKEhEF5b8KG3";

function ManageSettings() {
  const dispatch = useDispatch();

  const stores = useSelector((state) => state.storesSlice);
  const activeStore = useSelector((state) => state.dashboardSlice.activeStore);
  const staff = useSelector(
    (state) => state.staffSlice.storeStaff[activeStore]
  );

  const fetchStores = async () => {
    const data = await getStore(BusinessId);
    dispatch(storesActions.setStores(data.data.response));
  };

  const fetchStoreStaff = async () => {
    const data = await getStaff(activeStore);
    console.log(data.data);
    console.log();

    dispatch(
      staffActions.setStoreStaff({
        store: data.data.storeId,
        data: {
          ...data.data,
        },
      })
    );
  };

  useEffect(() => {
    if (!stores.stores) {
      fetchStores();
    } else if (checkDataFitchTime(stores.updatedAt)) {
      // fetchStores();
    }
  }, [stores]);

  useEffect(() => {
    if (!staff) {
      fetchStoreStaff();
    }
  }, [activeStore]);

  return (
    <div className="manageSettings">
      <div className="manageSettings__header">
        <p>Manage Staff</p>
        <PopupCard />
      </div>
      <div className="manageSettings__chipContainer thin_scrollbar">
        {stores?.stores?.map((el) => (
          <Chip
            activate={el.storeId === activeStore}
            // setActiveStore={setActiveStore}
            storeId={el.storeId}
            label={el.name}
          />
        ))}
      </div>
      <div className="manageSettings__table thin_scrollbar">
        <Table data={staff} />
      </div>
    </div>
  );
}

export default ManageSettings;
