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

const Profile = () => {
  const { data: session, status } = useSession();
  const [userDatas, setUserData] = useState({});

  const userData = {
    name: "Siti Juliana",
    username: "sitijuliana",
    email: "sitijuliana12@gmail.com",
    phone: "6281128383",
    address: "Jakarta, Indonesia",
    service: "Pendirian PT",
    joinDate: "15 Januari 2024",
    status: "Aktif",
  };

  console.log(session?.user.id, status);

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
            <CardTitle>{userData.name}</CardTitle>
            <CardDescription>@{userData.username}</CardDescription>
            <Badge variant="secondary">{userData.status}</Badge>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-500" />
              <span className="text-sm">{userData.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-500" />
              <span className="text-sm">{userData.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span className="text-sm">{userData.address}</span>
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
                <Input id="name" defaultValue={userData.name} />
              </div>
              <div>
                <Label htmlFor="phone">No. WhatsApp</Label>
                <Input id="phone" defaultValue={userData.phone} />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue={userData.email} />
            </div>
            <div>
              <Label htmlFor="address">Alamat</Label>
              <Textarea id="address" defaultValue={userData.address} rows={3} />
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
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
              <Input id="current-password" type="password" />
            </div>
            <div>
              <Label htmlFor="new-password">Password Baru</Label>
              <Input id="new-password" type="password" />
            </div>
          </div>
          <Button variant="outline">
            <Shield className="w-4 h-4 mr-2" />
            Update Password
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
