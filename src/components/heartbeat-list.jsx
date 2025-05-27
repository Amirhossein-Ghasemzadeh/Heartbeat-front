import {useGetUser} from '../hooks/useUser';
import {HeartbeatCard} from './heartbeat-card';

export const HeartbeatList = () => {
  const {data, isLoading} = useGetUser();

  if (isLoading) return 'loading...';

  const recordsLength = data?.heartbeats?.length || [];

  return (
    <div className='grid gap-y-4 py-24 overflow-y-auto mx-8'>
      <span className='text-neutral-600 font-bold'>
        {data?.username} has
        {recordsLength > 0
          ? ` ${recordsLength} recorded heartbeat:` +
            `${data?.heartbeats?.length > 1 ? 's' : ''}`
          : ' No recorded heartbeats yet.'}
      </span>
      {data?.heartbeat.reverse().map((card) => (
        <HeartbeatCard key={card.timestamp} {...card} />
      ))}
    </div>
  );
};
