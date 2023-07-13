import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'
import Card from '../UI/Card';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sadza and Beef',
        description: 'Finest beef',
        price: 1.00,
    },
    {
        id: 'm2',
        name: 'Sadza and Chicken',
        description: 'A Zimambwean specialty!',
        price: 1.50,
    },
    {
        id: 'm3',
        name: 'Sadza and Mazondo',
        description: 'meaty',
        price: 2.50,
    },
    {
        id: 'm4',
        name: 'Sadza and Vegetables',
        description: 'Healthy...and green...',
        price: 0.5,
    },
];


const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} />);

    return <section className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>
};

export default AvailableMeals;