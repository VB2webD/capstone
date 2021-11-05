import { useState, useEffect } from "react";

/**
 * defines HTML requests: GET, DELETE, POST, PUT for given Route with subsequent dynamic Items. (includes loadingState)
 * returns CRUD [ insertData ,data, updateData, deleteData]
 * @param {string} route select the path you want to adress inside the pages folder.
 *  eg: api/collection/
 */
export const useRequestHandler = (route) => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchPage = async () => {
    setIsLoading(true);

    try {
      const result = await fetch(`${route}`);
      const data = await result.json();

      const fetchedData = data;
      setData(fetchedData);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPage();
  }, []);

  /**
   * deleteData: deletes item for dynamicSelector.
   * refreshes collection after item deletion.
   * @param {string} dynamicSelector eg: _id
   */
  const deleteData = async (_id) => {
    setIsLoading(true);

    try {
      await fetch(`${route}/${_id}`, { method: "DELETE" });
    } catch (error) {
      console.error(error.message);
    } finally {
      fetchPage();
    }
  };

  /**
   * insertData adds a new Item in your collection
   * refreshes collection after item creation.
   * @param {*} newData will be send as JSON to the collection specified in [dynamicSelector] Component
   */
  const insertData = async (newData) => {
    setIsLoading(true);

    try {
      const postMethod = {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(newData),
      };
      await fetch(`${route}/`, postMethod);
    } catch (error) {
      console.error(error.message);
    } finally {
      fetchPage();
    }
  };

  /**
   * updateData selects item by dynamicSelector and updates its values.
   * refreshes collection after update.
   * @param {string} dynamicSelector item will be selected by this key
   * @param {*} updatedData replaces the values of selected item with given input
   */
  const updateData = async (_id, updatedData) => {
    setIsLoading(true);

    try {
      const putMethod = {
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(updatedData),
      };

      await fetch(`${route}/${_id}`, { putMethod });
    } catch (error) {
      console.error(error.message);
    } finally {
      fetchPage();
    }
  };
  return { data, isLoading, insertData, updateData, deleteData };
  // must return Data, loading, HTML Requests, dynamicSpecifier?
};
