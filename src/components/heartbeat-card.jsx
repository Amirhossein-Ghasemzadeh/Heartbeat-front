import {getRecordDate} from '../utils/string';

export const HeartbeatCard = ({value, timestamp}) => {
  return (
    <div className='max-w-sm mx-auto h-min bg-white rounded-xl shadow-md overflow-hidden border border-gray-200'>
      <div className='p-6 flex flex-col items-center space-y-4'>
        <div className='text-6xl font-extrabold text-red-500'>
          {value} <span className='text-2xl font-normal'>bpm</span>
        </div>
        <div className='text-gray-500 text-sm'>
          Recorded on{' '}
          <time className='text-gray-800 font-medium'>{getRecordDate(timestamp)}</time>
        </div>
      </div>
    </div>
  );
};
