export const CategoryItem = (props: { item: { id: any; name: any; icons: any; }; }) => {
    const {  id, name, icons } = props.item;
   
    return (
            <li className="browse-container" key={id}>
                <div className="category-item">
                    <div className="category-image">
                        <img alt="genre cover" src={icons?.[0]?.['url']} />
                        <p className="category-name text-white">{name}</p>
                    </div>
                </div>
            </li>
    )
}