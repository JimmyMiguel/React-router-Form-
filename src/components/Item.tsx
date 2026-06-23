
interface ItemProps {
    image: string;
    name: string;
    price: number;
}

export default function Item({ image, name, price }: ItemProps) {
    return (
        <div style={{ fontFamily: 'sans-serif', maxWidth: '200px', padding: '12px' }}>
            <img 
                src={image} 
                alt={name} 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
            <h3 style={{ margin: '10px 0 4px 0', fontSize: '16px' }}>{name}</h3>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>${price}</p>
        </div>
    )
}