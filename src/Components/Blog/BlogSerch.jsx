import '../../csss/style.css'
import '../../csss/bootstrap.min.css'
const BlogSearch = () => {
  const searchToggle = (element, event) => {
    // Implement your search toggle functionality here
    console.log('Search toggle', element, event);
  };

  return (
    <div className="row justify-content-center position-relative">
      <div className="col-12">
        <ul
          className="nav nav-pills my-md-3 gap-20 position-relative navflex"
          id="pills-tab"
          role="tablist"
        >
          <div className="noVertical cnt">
            <li className="nav-item">
              <button
                className="nav-link active"
                id="pills-filter-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-all"
                type="button"
                role="tab"
                aria-controls="pills-all"
                aria-selected="false"
              >
                Latest
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                id="pills-filter-1-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-very"
                type="button"
                role="tab"
                aria-controls="pills-very"
                aria-selected="false"
              >
                UI Design
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                id="pills-filter-2-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-cute"
                type="button"
                role="tab"
                aria-controls="pills-cute"
                aria-selected="false"
              >
                Design System
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                id="pills-filter-3-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-jellyfish"
                type="button"
                role="tab"
                aria-controls="pills-jellyfish"
                aria-selected="false"
              >
                Web Design
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                id="pills-filter-4-tab"
                data-bs-toggle="pill"
                data-bs-target="#Webflow"
                type="button"
                role="tab"
                aria-controls="Webflow"
                aria-selected="false"
              >
                Webflow
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                id="pills-filter-5-tab"
                data-bs-toggle="pill"
                data-bs-target="#Career"
                type="button"
                role="tab"
                aria-controls="Career"
                aria-selected="false"
              >
                Career
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                id="pills-filter-6-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-Branding"
                type="button"
                role="tab"
                aria-controls="pills-Branding"
                aria-selected="false"
              >
                Branding
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                id="pills-filter-7-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-Thinking"
                type="button"
                role="tab"
                aria-controls="pills-Thinking"
                aria-selected="false"
              >
                Design Thinking
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                id="pills-filter-8-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-Business"
                type="button"
                role="tab"
                aria-controls="pills-Business"
                aria-selected="false"
              >
                Business
              </button>
            </li>
          </div>
        </ul>
        <div className="">
          <div className="search-wrapper">
            <div className="input-holder">
              <input
                type="text"
                className="search-input"
                placeholder="Type to search"
              />
              <button
                className="search-icon"
                onClick={(e) => searchToggle(e.currentTarget, e)}
              >
                <span></span>
              </button>
            </div>
            <span
              className="close"
              onClick={(e) => searchToggle(e.currentTarget, e)}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSearch;
