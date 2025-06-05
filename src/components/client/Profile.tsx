"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MapPin, Phone, Save, Shield, User } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/store/userSlice";
import type { RootState, AppDispatch } from "@/store";
import api from "@/lib/axios";
import { toast } from "sonner";
const Profile = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [address, setAddress] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { data: session } = useSession();
  const dispatch = useDispatch<AppDispatch>();
  const { items, loading, error } = useSelector(
    (state: RootState) => state.user
  );
  const { data, status, message } = items;

  // Update user data
  const updateUserInfo = async () => {
    try {
      const response = await api.put(
        `/api/users/update-user/${session?.user.id}`,
        {
          fullName,
          email,
          whatsappNumber,
          address,
        }
      );
      toast.success("Profil berhasil diperbarui!");
      if (session) {
        dispatch(fetchUsers(session?.user.id));
      } // Refresh data
    } catch (error) {
      console.error(error);
      toast.error("Gagal memperbarui profil.");
    }
  };

  const updatePassword = async () => {
    try {
      if (newPassword === "" || currentPassword === "") {
        toast.error("Gagal memperbarui password.");
        return;
      }

      await api.put(`/api/users/update-user/${session?.user.id}`, {
        currentPassword,
        password: newPassword,
      });
      toast.success("Password berhasil diperbarui!");
      setCurrentPassword("");
      setNewPassword("");
    } catch (error: any) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Gagal memperbarui password."
      );
    }
  };

  useEffect(() => {
    if (session?.user.id) {
      dispatch(fetchUsers(session.user.id));
    }
  }, [dispatch, session]);

  useEffect(() => {
    if (data) {
      setFullName(data.fullName || "");
      setEmail(data.email || "");
      setWhatsappNumber(data.whatsappNumber || "");
      setAddress(data.address || "");
    }
  }, [data]);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Profile</h2>
        <p className="text-gray-600">
          Kelola informasi profil dan pengaturan akun Anda
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center mb-4">
              <User className="w-10 h-10 text-white" />
            </div>
            <CardTitle>{data?.fullName}</CardTitle>
            <CardDescription>@{data?.username}</CardDescription>
            <Badge variant="secondary">{data?.status}</Badge>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-500" />
              <span className="text-sm">{data?.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-500" />
              <span className="text-sm">{data?.whatsappNumber}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="text-sm">{data?.address}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Edit Profil</CardTitle>
            <CardDescription>Update informasi personal Anda</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input
                  id="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="phone">No. WhatsApp</Label>
                <Input
                  id="phone"
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="address">Alamat</Label>
              <Textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600"
              onClick={updateUserInfo}
              disabled={loading}
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Keamanan Akun
          </CardTitle>
          <CardDescription>Kelola password dan keamanan akun</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="current-password">Password Saat Ini</Label>
              <Input
                id="current-password"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="new-password">Password Baru</Label>
              <Input
                id="new-password"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>
          <Button variant="outline" onClick={updatePassword} disabled={loading}>
            <Shield className="w-4 h-4 mr-2" />
            Update Password
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
