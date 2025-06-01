"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  LayoutDashboard,
  FileText,
  Receipt,
  ClipboardList,
  MessageSquare,
  FolderOpen,
  User,
  LogOut,
  Menu,
  X,
  Download,
  CheckCircle,
  Clock,
  AlertCircle,
  Star,
  Send,
  Upload,
  Save,
  Phone,
  Mail,
  MapPin,
  Shield,
  CreditCard,
} from "lucide-react"

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const userData = {
    name: "Siti Juliana",
    username: "sitijuliana",
    email: "sitijuliana12@gmail.com",
    phone: "6281128383",
    address: "Jakarta, Indonesia",
    service: "Pendirian PT",
    joinDate: "15 Januari 2024",
    status: "Aktif",
  }

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "proposal", label: "Proposal", icon: FileText },
    { id: "invoice", label: "Invoice", icon: Receipt },
    { id: "progress", label: "Progress Pekerjaan", icon: ClipboardList },
    { id: "reviews", label: "Daftar Review", icon: MessageSquare },
    { id: "documents", label: "Brankas Legalitas", icon: FolderOpen },
    { id: "profile", label: "Profile", icon: User },
  ]

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">Hi, {userData.name}</h1>
        <p className="text-blue-100">Selamat datang di dashboard klien Legalitas.org</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Proposal Aktif</p>
                <p className="text-2xl font-bold">1</p>
              </div>
              <FileText className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Invoice Pending</p>
                <p className="text-2xl font-bold">1</p>
              </div>
              <Receipt className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Progress</p>
                <p className="text-2xl font-bold">60%</p>
              </div>
              <Clock className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <p className="text-2xl font-bold">Aktif</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Progress Pekerjaan Saat Ini</CardTitle>
            <CardDescription>Status terkini layanan Pendirian PT</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span>Pendirian PT</span>
                <span className="font-bold">60%</span>
              </div>
              <Progress value={60} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm">Konsultasi Awal ✓</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm">Persiapan Dokumen ✓</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm">Dokumen Review (Saat ini)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <span className="text-sm">Proses Notaris</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Aktivitas Terbaru</CardTitle>
            <CardDescription>Update terbaru dari layanan Anda</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <FileText className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-sm">Proposal Pendirian PT dikirim</p>
                <p className="text-xs text-gray-600">15 Jan 2024</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
              <Clock className="w-5 h-5 text-purple-600 mt-0.5" />
              <div>
                <p className="font-medium text-sm">Progress update: Dokumen Review</p>
                <p className="text-xs text-gray-600">14 Jan 2024</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
              <Receipt className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <p className="font-medium text-sm">Invoice INV-001 dibuat</p>
                <p className="text-xs text-gray-600">13 Jan 2024</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderProposal = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Proposal</h2>
        <p className="text-gray-600">Daftar proposal yang dikirim oleh admin</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Proposal Pendirian PT
                <Badge>Diterima</Badge>
              </CardTitle>
              <CardDescription>Rp 3,000,000 • Dikirim: 15 Jan 2024</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">
            Proposal lengkap untuk pendirian PT termasuk akta notaris, SK Kemenkumham, dan dokumen pendukung lainnya.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Detail Layanan:</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Pengecekan Nama PT
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Akta Pendirian PT
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  SK Menteri
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Dapat 20 KBLI
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Yang Termasuk:</h4>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  Konsultasi gratis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  Revisi unlimited
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-500" />
                  Support 24/7
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-medium text-green-800">Proposal Diterima</span>
            </div>
            <p className="text-sm text-green-700 mt-1">
              Proposal ini telah Anda terima. Tim kami akan segera memulai proses pengerjaan.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderInvoice = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Invoice</h2>
        <p className="text-gray-600">Daftar invoice dan status pembayaran</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Invoice Pendirian PT
                <Badge variant="destructive">Belum Dibayar</Badge>
              </CardTitle>
              <CardDescription>INV-001 • Rp 3,000,000 • Jatuh tempo: 25 Jan 2024</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                <CreditCard className="w-4 h-4 mr-2" />
                Bayar Sekarang
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-700">Pembayaran untuk jasa pendirian PT termasuk akta notaris dan SK Kemenkumham</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Detail Invoice</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Nomor Invoice:</span>
                  <span className="font-medium">INV-001</span>
                </div>
                <div className="flex justify-between">
                  <span>Tanggal Terbit:</span>
                  <span className="font-medium">15 Jan 2024</span>
                </div>
                <div className="flex justify-between">
                  <span>Jatuh Tempo:</span>
                  <span className="font-medium">25 Jan 2024</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Informasi Pembayaran</h4>
              <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Bank:</span>
                    <span className="font-medium">Bank BCA</span>
                  </div>
                  <div className="flex justify-between">
                    <span>No. Rekening:</span>
                    <span className="font-medium">1234567890</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Atas Nama:</span>
                    <span className="font-medium">PT Legalitas Indonesia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <span className="font-medium text-red-800">Menunggu Pembayaran</span>
            </div>
            <p className="text-sm text-red-700 mt-1">
              Silahkan lakukan pembayaran sebelum tanggal jatuh tempo: 25 Jan 2024
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderProgress = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Progress Pekerjaan</h2>
        <p className="text-gray-600">Pantau progress real-time pekerjaan Anda</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Pendirian PT</CardTitle>
              <CardDescription>Dimulai: 15 Jan 2024 • Estimasi selesai: 5 Feb 2024</CardDescription>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-blue-600">60%</p>
              <p className="text-sm text-gray-500">Selesai</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span>Progress: Dokumen Review</span>
              <span>60%</span>
            </div>
            <Progress value={60} className="h-3" />
          </div>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-blue-800">Status Saat Ini: Dokumen Review</span>
            </div>
            <p className="text-sm text-blue-700">
              Dokumen Anda sedang dalam tahap review oleh tim legal kami. Proses ini membutuhkan waktu 2-3 hari kerja.
            </p>
            <p className="text-xs text-blue-600 mt-2">Update terakhir: 17 Jan 2024</p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Timeline Pekerjaan</h4>
            <div className="space-y-4">
              {[
                { name: "Konsultasi Awal", status: "completed", date: "15 Jan 2024" },
                { name: "Persiapan Dokumen", status: "completed", date: "16 Jan 2024" },
                { name: "Dokumen Review", status: "current", date: "17 Jan 2024" },
                { name: "Proses Notaris", status: "pending" },
                { name: "Pendaftaran Kemenkumham", status: "pending" },
                { name: "Selesai", status: "pending" },
              ].map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    {step.status === "completed" ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : step.status === "current" ? (
                      <Clock className="w-5 h-5 text-blue-500" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                    )}
                    {index < 5 && (
                      <div
                        className={`w-0.5 h-8 mt-2 ${step.status === "completed" ? "bg-green-300" : "bg-gray-200"}`}
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h5
                      className={`font-medium ${
                        step.status === "completed"
                          ? "text-green-600"
                          : step.status === "current"
                            ? "text-blue-600"
                            : "text-gray-500"
                      }`}
                    >
                      {step.name}
                    </h5>
                    {step.date && <p className="text-xs text-gray-500">{step.date}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderReviews = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Daftar Review</h2>
        <p className="text-gray-600">Berikan review untuk layanan yang telah Anda gunakan</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Tulis Review Baru
          </CardTitle>
          <CardDescription>Bagikan pengalaman Anda menggunakan layanan Legalitas</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label className="text-sm font-medium">Rating</Label>
            <div className="flex gap-1 mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 text-gray-300 hover:text-yellow-400 cursor-pointer" />
              ))}
            </div>
          </div>
          <div>
            <Label htmlFor="review">Review Anda</Label>
            <Textarea
              id="review"
              placeholder="Ceritakan pengalaman Anda menggunakan layanan kami..."
              rows={4}
              className="mt-1"
            />
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
            <Send className="w-4 h-4 mr-2" />
            Kirim Review
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Review Anda</CardTitle>
          <CardDescription>Review yang telah Anda berikan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 border rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium">Pendirian PT</h4>
              <Badge>Published</Badge>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-500">• 10 Jan 2024</span>
            </div>
            <p className="text-gray-700 mb-3">
              Pelayanan sangat memuaskan, proses cepat dan tim sangat profesional. Terima kasih Legalitas!
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-3">
              <p className="text-sm font-medium text-blue-800 mb-1">Respon dari Legalitas</p>
              <p className="text-sm text-blue-700">
                Terima kasih atas review positifnya! Kami senang dapat membantu Anda.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderDocuments = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Brankas Legalitas</h2>
        <p className="text-gray-600">Dokumen legal Anda tersimpan aman dan dapat diakses kapan saja</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Upload Dokumen
          </CardTitle>
          <CardDescription>Upload dokumen pendukung untuk layanan Anda</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Upload Dokumen</h3>
            <p className="text-gray-500 mb-4">Drag & drop file atau klik untuk browse</p>
            <Button variant="outline">
              <Upload className="w-4 h-4 mr-2" />
              Pilih File
            </Button>
            <p className="text-xs text-gray-400 mt-2">Maksimal 10MB • PDF, DOC, JPG, PNG</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderOpen className="w-5 h-5" />
            Dokumen Anda
          </CardTitle>
          <CardDescription>Daftar semua dokumen yang tersimpan</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: "Akta Pendirian PT", type: "PDF", size: "2.5 MB", date: "15 Jan 2024", status: "Final" },
              { name: "SK Kemenkumham", type: "PDF", size: "1.8 MB", date: "18 Jan 2024", status: "Final" },
              { name: "NPWP Perusahaan", type: "PDF", size: "0.9 MB", date: "20 Jan 2024", status: "Draft" },
            ].map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="w-8 h-8 text-blue-600" />
                  <div>
                    <h4 className="font-medium">{doc.name}</h4>
                    <p className="text-sm text-gray-500">
                      {doc.size} • {doc.date}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={doc.status === "Final" ? "secondary" : "outline"}>{doc.status}</Badge>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderProfile = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Profile</h2>
        <p className="text-gray-600">Kelola informasi profil dan pengaturan akun Anda</p>
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
  )

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return renderDashboard()
      case "proposal":
        return renderProposal()
      case "invoice":
        return renderInvoice()
      case "progress":
        return renderProgress()
      case "reviews":
        return renderReviews()
      case "documents":
        return renderDocuments()
      case "profile":
        return renderProfile()
      default:
        return renderDashboard()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-blue-600 to-purple-600 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold">L</span>
            </div>
            <div>
              <h2 className="font-bold text-white">Legalitas.org</h2>
              <p className="text-xs text-blue-100">Client Dashboard</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="lg:hidden text-white" onClick={() => setSidebarOpen(false)}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        <nav className="mt-6 px-4">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id)
                  setSidebarOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeTab === item.id ? "bg-white/20 text-white font-medium" : "text-blue-100 hover:bg-white/10"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/20">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-blue-100 hover:bg-white/10 transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white shadow-sm border-b px-4 py-3">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-5 h-5" />
            </Button>
            <h1 className="font-semibold">{menuItems.find((item) => item.id === activeTab)?.label || "Dashboard"}</h1>
            <div className="w-10"></div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">{renderContent()}</div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}
