import { useFetchComunityList } from "../../auth/hooks/useFetchComunityList";
import { Navbar, Sidebar } from "../../layout/views"

export const Homecomunitypage = () => {

  const { data, hasError } = useFetchComunityList('https://api-propietarispuntcat.onrender.com/api/communities');
  const {results} = data;
  console.log(results);
  const handleAddCommunity = () => {

  }

  return (
    <div className="container p-30">
      <Navbar />
      <div className="body-container">
        <Sidebar />
        <div className="body-comunities">
          <div className="addComunity">
            <p>Encara no tens una comunitat? Crea una per començar a fer servir l'aplicació</p>
            <button
                className="btn btn-comunity"
                onClick={ handleAddCommunity }
            >+</button>
          </div>
          {
            results.map(result => (
              <div key={ result.cif } className="field">
                <p className="data-field">{ result.name }</p>
                <p className="data-field">{ result.cif }</p>
                <p className="data-field">{ result.address }</p>
                <p className="data-field">{ result.postalCode }</p>
                <p className="data-field">{ result.city }</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
