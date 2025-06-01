"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { UserPlus, Send } from "lucide-react"

export default function CreateUserPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Buat Akun User Baru</h1>
        <p className="text-muted-foreground">Buat akun login untuk klien yang sudah request proposal</p>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserPlus className="w-5 h-5" />
            Form Buat Akun User
          </CardTitle>
          <CardDescription>Isi informasi berikut untuk membuat akun user baru</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="full-name">Nama Lengkap</Label>
              <Input id="full-name" placeholder="Contoh: Siti Juliana" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="sitijuliana12@gmail.com" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">No. WhatsApp</Label>
              <Input id="phone" placeholder="6281128383" />
            </div>
            <div>
              <Label htmlFor="service">Layanan</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih layanan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pendirian-pt">Pendirian PT</SelectItem>
                  <SelectItem value="pendirian-cv">Pendirian CV</SelectItem>
                  <SelectItem value="trademark">Trademark</SelectItem>
                  <SelectItem value="izin-usaha">Izin Usaha</SelectItem>
                  <SelectItem value="lainnya">Lainnya</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="sitijuliana" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Buat password" />
            </div>
          </div>

          <div>
            <Label htmlFor="notes">Catatan</Label>
            <Textarea id="notes" placeholder="Catatan tambahan tentang klien atau layanan..." rows={3} />
          </div>

          <div>
            <Label htmlFor="account-status">Status Akun</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Pilih status akun" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Aktif</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="pt-4 space-y-3">
            <Button className="w-full">
              <UserPlus className="w-4 h-4 mr-2" />
              Buat Akun User
            </Button>
            <Button variant="outline" className="w-full">
              <Send className="w-4 h-4 mr-2" />
              Buat Akun & Kirim Kredensial via Email
            </Button>
            <Button variant="secondary" className="w-full">
              <Send className="w-4 h-4 mr-2" />
              Buat Akun & Kirim Kredensial via WhatsApp
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
