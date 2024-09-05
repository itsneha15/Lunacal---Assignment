import FirstWidget from './FirstWidget'
import HrTag from './HrTag'
import SecondWidget from './SecondWidget'

const SecondPart = () => {
    return (
        <div
            className="flex-col w-[680px] h-[520px] lg:ml-[50px] mt-[50px] lg:mt-0 mb-[90px] lg:mb-[37px]"
        >
            <FirstWidget />
            <HrTag />
            <SecondWidget />
            <HrTag />
        </div>
    )
}

export default SecondPart
