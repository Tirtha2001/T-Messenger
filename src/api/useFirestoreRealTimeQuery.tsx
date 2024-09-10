import { useQueryClient, useQuery } from '@tanstack/react-query';
import firestore from '@react-native-firebase/firestore';
import isEqual from 'lodash.isequal'; // To do deep comparison

type FirestoreDocument = {
  id: string;
  name: string; // Adjust this based on your document schema
  // Add other fields based on your document schema
};

const useFirestoreRealTimeDocument = (collectionName: string, docId: string) => {
  const queryClient = useQueryClient();

  // UseQuery for initial caching and data loading
  const query = useQuery<FirestoreDocument | null, Error>({
    queryKey: [collectionName, docId],
    queryFn: async (): Promise<FirestoreDocument | null> => {
      const docRef = firestore().collection(collectionName).doc(docId);
      const docSnapshot = await docRef.get();
      if (docSnapshot.exists) {
        return { id: docSnapshot.id, ...docSnapshot.data() } as FirestoreDocument;
      } else {
        return null; // Document doesn't exist
      }
    },
    staleTime: Infinity, // Keeps data fresh indefinitely
    refetchOnWindowFocus: false, // Prevents refetching when window is refocused
  });

  // Firestore real-time listener for the specific document
  firestore().collection(collectionName).doc(docId).onSnapshot((docSnapshot) => {
    if (docSnapshot.exists) {
      const newData = { id: docSnapshot.id, ...docSnapshot.data() } as FirestoreDocument;

      // Only update if the data has actually changed (deep comparison)
      const currentData = queryClient.getQueryData([collectionName, docId]);

      if (!isEqual(currentData, newData)) {
        queryClient.setQueryData([collectionName, docId], newData);
      }
    }
  });

  return query;
};

export default useFirestoreRealTimeDocument;
