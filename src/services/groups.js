import { db } from './firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export const createFamilyGroup = async (groupName, creatorId) => {
  try {
    const groupRef = await addDoc(collection(db, 'groups'), {
      name: groupName,
      creator: creatorId,
      members: [creatorId],
      createdAt: new Date().toISOString()
    });
    return groupRef.id;
  } catch (error) {
    throw new Error('Error al crear grupo familiar');
  }
};

export const inviteMember = async (groupId, email) => {
  try {
    await addDoc(collection(db, 'invitations'), {
      groupId,
      email,
      status: 'pending',
      createdAt: new Date().toISOString()
    });
  } catch (error) {
    throw new Error('Error al enviar invitación');
  }
}; 