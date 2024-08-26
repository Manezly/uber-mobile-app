import InputField from '@/components/InputField';
import { images } from '@/constants';
import { useUser } from '@clerk/clerk-expo';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = () => {
  const { user } = useUser();

  // const isEmailVerified = false;
  const isEmailVerified = user?.emailAddresses.some(
    (email) => email.id && email.verification?.status === 'verified'
  );

  return (
    <SafeAreaView>
      <ScrollView className='px-5 flex flex-col mb-20'>
        <Text className='text-xl font-JakartaExtraBold capitalize py-5 w-full'>
          Profile
        </Text>

        <View className='flex items-center justify-center'>
          <Image
            source={images.signUpCar}
            className='w-24 h-24 rounded-full border-2 border-white shadow-lg'
          />
        </View>

        <View className='bg-white py-5 w-full rounded-xl px-4 mt-8'>
          <InputField label='Last name' value={user?.firstName || ''} />
          <InputField label='Last name' value={user?.lastName || ''} />
          <InputField
            label='Email name'
            value={user?.primaryEmailAddress?.emailAddress || ''}
          />
          <Text className='text-lg font-JakartaSemiBold mb-3'>
            Email status
          </Text>
          <View className='flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 py-[13px] px-4'>
            {isEmailVerified ? (
              <View className='bg-green-100 px-4 py-1 rounded-2xl self-start border-[1px] border-green-400'>
                <Text>Verified</Text>
              </View>
            ) : (
              <View className='bg-gray-200 px-4 py-1 rounded-2xl self-start border-[1px] border-gray-700'>
                <Text>Not Verified</Text>
              </View>
            )}
          </View>
          <InputField
            label='Phone number'
            value={user?.primaryPhoneNumber?.phoneNumber || ''}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
